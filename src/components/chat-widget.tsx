'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { LoaderCircle, Phone, MapPin, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getAiResponse } from '@/app/actions';
import { cn } from '@/lib/utils';
import type { SuggestedContact } from '@/ai/flows/chatbot-assistant-flow';
// WhatsApp removido a pedido do cliente

type Message = {
  id: string;
  role: 'user' | 'ai';
  text: string;
  suggestions?: SuggestedContact[];
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'initial',
          role: 'ai',
          text: 'Olá! Sou o assistente virtual da Art Gesso. Como posso ajudar com seus projetos de gesso e drywall?',
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      const aiResponse = await getAiResponse(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: aiResponse.answer,
        suggestions: aiResponse.suggestedContacts,
      };
      setMessages((prev) => [...prev, aiMessage]);
    });
  };

  const SuggestionIcon = ({ type }: { type: SuggestedContact['type'] }) => {
    switch (type) {
      case 'phone':
        return <Phone className="h-4 w-4 text-primary" />;
      case 'google_maps':
        return <MapPin className="h-4 w-4 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full w-16 h-16 shadow-lg"
        aria-label="Abrir chat"
      >
        <Phone className="w-8 h-8" />
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="flex flex-col p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Assistente Virtual Art Gesso</SheetTitle>
            <SheetDescription>
              Tire suas dúvidas sobre nossos serviços e contatos.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'ai' && (
                    <Avatar className="w-8 h-8 border">
                      <AvatarFallback>
                        <Bot className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-xs md:max-w-md rounded-lg p-3 text-sm',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {message.suggestions
                          .filter((s) => s.type !== 'whatsapp')
                          .map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            asChild
                            className="w-full justify-start bg-background"
                          >
                            <a
                              href={
                                suggestion.type === 'phone'
                                  ? `tel:${suggestion.value}`
                                  : suggestion.value
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <SuggestionIcon type={suggestion.type} />
                              <span>{suggestion.label}</span>
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.role === 'user' && (
                    <Avatar className="w-8 h-8 border">
                      <AvatarFallback>
                        <User className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isPending && (
                <div className="flex items-start gap-3 justify-start">
                  <Avatar className="w-8 h-8 border">
                    <AvatarFallback>
                      <Bot className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3">
                    <LoaderCircle className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <SheetFooter className="p-4 border-t">
            <form onSubmit={handleSubmit} className="w-full flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                disabled={isPending}
              />
              <Button type="submit" disabled={isPending} aria-label="Enviar mensagem">
                {isPending ? (
                  <LoaderCircle className="w-4 h-4 animate-spin" />
                ) : (
                  <Phone className="w-4 h-4" />
                )}
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
