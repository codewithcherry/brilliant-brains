'use client';

import { FC, useState } from 'react';
import { motion ,Variants} from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Define the type for the fadeUp animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Define the type for the stagger animation
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const NewsletterSubscribe: FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="relative bg-white py-24 px-6 sm:px-10 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <Badge className="bg-indigo-100 text-indigo-700 mb-4 text-sm font-medium">
            Stay in the loop
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 tracking-tight">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-4 text-gray-600 max-w-md mx-auto text-base">
            Get monthly insights, tips, and stories delivered straight to your inbox.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="flex justify-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            variants={fadeUp}
            className="w-full md:w-[500px] flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 justify-center text-indigo-700 mb-2">
              <MailCheck className="w-6 h-6" />
              <span className="font-medium text-sm">Join 10,000+ smart subscribers</span>
            </div>

            {/* Input + Button merged */}
            <div className="flex overflow-hidden rounded-full border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-indigo-400 bg-white transition-all">
              <Input
                type="email"
                placeholder="you@example.com"
                className="border-none focus:ring-0 focus-visible:ring-0 px-6 py-4 text-base text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                className="rounded-none rounded-r-full bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 text-base font-semibold"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
