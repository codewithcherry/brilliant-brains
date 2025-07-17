'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  featured?: boolean;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  showCategories?: boolean;
  allowMultipleOpen?: boolean;
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  showSearch = true,
  showCategories = true,
  allowMultipleOpen = false,
  className = ""
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    
    if (allowMultipleOpen) {
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        newOpenItems.add(id);
      }
    } else {
      if (newOpenItems.has(id)) {
        newOpenItems.clear();
      } else {
        newOpenItems.clear();
        newOpenItems.add(id);
      }
    }
    
    setOpenItems(newOpenItems);
  };

  // Filter FAQs based on search term and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...new Set(faqs.map(faq => faq.category).filter(Boolean))];

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-3">
          <HelpCircle className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">
            {title}
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-3">
        {showSearch && (
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-300 focus:border-indigo-300 transition-colors"
            />
          </div>
        )}

        {showCategories && categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-1.5">
            {categories.filter((c): c is string => c !== undefined).map(category => (
            <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer text-xs px-2.5 py-1 transition-all ${
                selectedCategory === category
                    ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
                    : 'hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
                }`}
                onClick={() => setSelectedCategory(category)}
            >
                {category === 'all' ? 'All' : category}
            </Badge>
            ))}
        </div>
        )}
      </div>

      {/* FAQ Items */}
      <div className="space-y-2">
        {filteredFAQs.length === 0 ? (
          <Card className="text-center py-2">
            <CardContent>
              <HelpCircle className="h-8 w-8 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                No FAQs found matching your search criteria.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredFAQs.map((faq) => {
            const isOpen = openItems.has(faq.id);
            
            return (
              <Card
                key={faq.id}
                className={`transition-all duration-200 hover:shadow-sm border ${
                  isOpen ? 'border-indigo-200 shadow-xs' : 'border-gray-100 hover:border-indigo-100'
                } ${faq.featured ? 'ring-1 ring-indigo-300' : ''}`}
              >
                <CardHeader
                  className={`p-2 cursor-pointer transition-colors ${isOpen ? 'pb-2' : ''}`}
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-2 flex-1">
                      <div className={`mt-1 flex-shrink-0 p-1 rounded-full transition-colors ${
                        isOpen ? 'bg-indigo-500' : 'bg-gray-300'
                      }`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-medium text-left ${
                          isOpen ? 'text-indigo-600' : 'text-gray-700'
                        }`}>
                          {faq.question}
                        </h3>
                        {faq.category && showCategories && (
                          <Badge
                            variant="outline"
                            className="mt-1 text-[0.65rem] px-1.5 py-0.5 bg-indigo-50 text-indigo-500 border-indigo-100"
                          >
                            {faq.category}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className={`transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className={`h-4 w-4 ${
                        isOpen ? 'text-indigo-500' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </CardHeader>
                
                {isOpen && (
                  <CardContent className="pt-0 px-4 pb-2">
                    <div className="ml-5 pl-3 border-l border-indigo-100">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
                
                {faq.featured && (
                  <div className="absolute -top-1.5 -right-1.5 bg-indigo-500 text-white text-[0.6rem] font-bold py-0.5 px-1.5 rounded-full">
                    Featured
                  </div>
                )}
              </Card>
            );
          })
        )}
      </div>

      {/* Stats Footer */}
      <div className="mt-2 text-center">
        <p className="text-xs text-gray-400">
          Showing {filteredFAQs.length} of {faqs.length} questions
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </p>
      </div>
    </div>
  );
};

export default FAQAccordion;