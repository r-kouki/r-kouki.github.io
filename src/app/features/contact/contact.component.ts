import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { ChatbotService } from '../../services/chatbot.service';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  emailStatus = {
    show: false,
    success: false,
    message: ''
  };

  chatMessages: ChatMessage[] = [
    {
      text: "Hi! I'm your AI assistant. Ask me anything about Abderrahmen's skills, experience, projects, or education!",
      isUser: false,
      timestamp: new Date()
    }
  ];

  chatInput = '';
  isChatLoading = false;

  constructor(
    private chatbotService: ChatbotService,
    private sanitizer: DomSanitizer
  ) {
    // Configure marked options
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  ngOnInit() {
    // Initialize EmailJS
    emailjs.init(environment.emailjs.publicKey);
  }

  async onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.emailStatus.show = false;
    
    try {
      console.log('Sending email with data:', {
        from_name: this.formData.name,
        from_email: this.formData.email,
        phone: this.formData.phone,
        message: this.formData.message,
      });
      
      const result = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          phone: this.formData.phone,
          message: this.formData.message,
        }
      );
      
      console.log('Email sent successfully:', result);
      this.emailStatus = {
        show: true,
        success: true,
        message: 'Message sent successfully!'
      };
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    } catch (error) {
      console.error('Error sending email:', error);
      this.emailStatus = {
        show: true,
        success: false,
        message: 'An error occurred while sending your message. Please try again.'
      };
    } finally {
      this.isSubmitting = false;
    }
  }

  async sendMessage() {
    if (!this.chatInput.trim() || this.isChatLoading) return;

    const userMessage = this.chatInput.trim();

    // Add user message
    this.chatMessages.push({
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    });

    this.chatInput = '';
    this.isChatLoading = true;

    try {
      // Call AI service based on provider
      let aiResponse: string;

      if (environment.ai.provider === 'anthropic') {
        aiResponse = await this.chatbotService.sendMessageClaude(userMessage);
      } else {
        // This handles both OpenAI and Gemini (Gemini is handled inside sendMessage)
        aiResponse = await this.chatbotService.sendMessage(userMessage);
      }

      // Add AI response
      this.chatMessages.push({
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error sending message:', error);
      this.chatMessages.push({
        text: "I apologize, but I'm having trouble processing your request. Please try again or contact Abderrahmen directly at abderrahmen.kouki.software@gmail.com",
        isUser: false,
        timestamp: new Date()
      });
    } finally {
      this.isChatLoading = false;
    }
  }

  renderMarkdown(text: string): SafeHtml {
    const html = marked.parse(text) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
} 