"use client"
import { ChevronRight, Home, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
}

const faqData: FAQSection[] = [
    {
        title: "Shipping Information",
        items: [
            {
                question: "How will my parcel be delivered?",
                answer: "Your parcel will be delivered by our trusted courier partners directly to your doorstep. You'll receive a tracking number via email once your order is shipped, allowing you to monitor your delivery in real-time.",
            },
            {
                question: "Do I pay for delivery?",
                answer: "Delivery costs depend on your location and order value. We offer free shipping on orders over $50. For orders below this threshold, a flat shipping fee applies based on your delivery zone.",
            },
            {
                question: "How long does shipping take?",
                answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for 1-2 business day delivery. International orders may take 7-14 business days.",
            },
            {
                question: "Can I change my delivery address?",
                answer: "You can update your delivery address before your order is shipped. Please contact our customer support team as soon as possible with your order number to request an address change.",
            },
        ],
    },
    {
        title: "Orders And Returns",
        items: [
            {
                question: "How can I return an item?",
                answer: "To return an item, log into your account and navigate to your order history. Select the item you wish to return and follow the prompts. You'll receive a prepaid return label via email within 24 hours.",
            },
            {
                question: "I haven't received my order",
                answer: "If your order hasn't arrived within the expected timeframe, please check your tracking information first. If there's no update, contact our support team with your order number and we'll investigate immediately.",
            },
            {
                question: "How do I track my order?",
                answer: "Once your order ships, you'll receive an email with a tracking link. You can also track your order by logging into your account and viewing your order history, where real-time tracking updates are available.",
            },
            {
                question: "What is your return policy?",
                answer: "We accept returns within 30 days of delivery for unused items in original packaging. Refunds are processed within 5-7 business days after we receive the returned item.",
            },
        ],
    },
    {
        title: "Payments",
        items: [
            {
                question: "What payment types can I use?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. For larger orders, we also offer payment plans through Klarna and Afterpay.",
            },
            {
                question: "Can I pay by gift card?",
                answer: "Yes! Gift cards can be applied at checkout. You can combine gift cards with other payment methods if your order total exceeds the gift card balance.",
            },
            {
                question: "I can't make a payment",
                answer: "If you're experiencing payment issues, please ensure your card details are correct and your card hasn't expired. Try using a different browser or clearing your cache. If problems persist, contact your bank or our support team.",
            },
            {
                question: "Has my payment gone through?",
                answer: "You'll receive an order confirmation email immediately after successful payment. You can also check your order status in your account. If you're unsure, please check your bank statement or contact our support team.",
            },
        ],
    },
];
const FAQ = () => {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (key: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="custom-container pb-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm py-8">
                <Link
                    href="/"
                    className="text-primary hover:text-primary/80 transition-colors"
                >
                    <Home className="h-4 w-4" />
                </Link>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                <span className="text-foreground font-medium">FAQ</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                    F.A.Q
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Can't find the answer you're looking for? We've shared some of your
                    most frequently asked questions to help you out!
                </p>
            </header>

            {/* FAQ Sections */}
            <div className="space-y-10">
                {faqData.map((section, sectionIndex) => (
                    <section key={sectionIndex} className="flex flex-col space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900">
                            {section.title}
                        </h2>

                        <div className="flex flex-col border border-gray-300 w-full lg:w-3/4 text-base text-gray-800 rounded-lg overflow-hidden">
                            {section.items.map((item, itemIndex) => {
                                const key = `${sectionIndex}-${itemIndex}`;
                                const isOpen = openItems[key];
                                const isLast = itemIndex === section.items.length - 1;

                                return (
                                    <div
                                        key={key}
                                        className={`flex flex-col duration-500 overflow-hidden gap-4 bg-slate-100 ${!isLast ? "border-b border-gray-300" : ""
                                            } ${isOpen ? "h-auto" : "h-16"}`}
                                    >
                                        <button
                                            onClick={() => toggleItem(key)}
                                            className="flex justify-between px-3 items-center py-5 cursor-pointer w-full text-left"
                                        >
                                            <p>{item.question}</p>
                                            {isOpen ? (
                                                <Minus className="h-4 w-4 text-gray-600" />
                                            ) : (
                                                <Plus className="h-4 w-4 text-gray-600" />
                                            )}
                                        </button>

                                        <p className="px-3 pb-4 text-gray-600">
                                            {item.answer}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

        </div>
    );
};

export default FAQ;