'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  variant?: 'default' | 'bordered' | 'minimal';
  className?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  variant = 'default',
  className = ''
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'bordered':
        return 'border border-gray-200 rounded-lg overflow-hidden';
      case 'minimal':
        return 'space-y-2';
      default:
        return 'space-y-2';
    }
  };

  const getItemClasses = (isOpen: boolean, index: number) => {
    switch (variant) {
      case 'bordered':
        return `border-b border-gray-200 last:border-b-0 ${isOpen ? 'bg-gray-50' : ''}`;
      case 'minimal':
        return 'border border-gray-200 rounded-lg hover:border-gray-300 transition-colors';
      default:
        return 'bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all';
    }
  };

  return (
    <div className={`${getVariantClasses()} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div key={item.id} className={getItemClasses(isOpen, index)}>
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 pr-4">{item.title}</h3>
              <div className="flex-shrink-0">
                {variant === 'minimal' ? (
                  isOpen ? <Minus size={20} /> : <Plus size={20} />
                ) : (
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-gray-500" />
                  </motion.div>
                )}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-700">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// Specialized FAQ component
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export function FAQ({ items, title = "Questions fréquentes", className = '' }: FAQProps) {
  const accordionItems: AccordionItem[] = items.map((item, index) => ({
    id: `faq-${index}`,
    title: item.question,
    content: <p className="text-gray-700 leading-relaxed">{item.answer}</p>
  }));

  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h2>
      )}
      <Accordion items={accordionItems} variant="bordered" />
    </div>
  );
}