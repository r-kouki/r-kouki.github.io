import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

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
      text: "Hi! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ];

  chatInput = '';

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

  sendMessage() {
    if (!this.chatInput.trim()) return;

    // Add user message
    this.chatMessages.push({
      text: this.chatInput,
      isUser: true,
      timestamp: new Date()
    });

    // Simulate AI response
    setTimeout(() => {
      this.chatMessages.push({
        text: "Thanks for your message! I'm a demo chatbot. In the real implementation, I'll be connected to an LLM API to provide meaningful responses.",
        isUser: false,
        timestamp: new Date()
      });
    }, 1000);

    this.chatInput = '';
  }
} 