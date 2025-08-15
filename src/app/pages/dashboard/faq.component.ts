import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  order: number;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What language will be used in the hackathon?',
      answer: 'Arabic is the primary language for communication and presentations. Technical materials in English are accepted when needed.',
      category: 'General',
      isActive: true,
      order: 1
    },
    {
      id: 2,
      question: 'Can I register the idea in Arabic or English?',
      answer: 'Yes, ideas can be registered in Arabic or English, with a preference to unify the final presentation language.',
      category: 'Registration',
      isActive: true,
      order: 2
    },
    {
      id: 3,
      question: 'Can I register more than one idea?',
      answer: 'You may submit multiple ideas, but you will need to select one to proceed with during the implementation phase.',
      category: 'Registration',
      isActive: true,
      order: 3
    }
  ];

  categories = ['General', 'Registration', 'Technical', 'Logistics', 'Prizes'];
  
  isAdding = false;
  isEditing = false;
  editingItem: FAQItem | null = null;
  newItem: Partial<FAQItem> = {};
  expandedItems: Set<number> = new Set();

  startAdding() {
    this.isAdding = true;
    this.newItem = {
      question: '',
      answer: '',
      category: 'General',
      isActive: true,
      order: this.faqItems.length + 1
    };
  }

  startEditing(item: FAQItem) {
    this.isEditing = true;
    this.editingItem = { ...item };
  }

  saveItem() {
    if (this.isAdding && this.newItem.question && this.newItem.answer) {
      const item: FAQItem = {
        id: this.faqItems.length + 1,
        question: this.newItem.question,
        answer: this.newItem.answer,
        category: this.newItem.category || 'General',
        isActive: this.newItem.isActive || true,
        order: this.newItem.order || this.faqItems.length + 1
      };
      this.faqItems.push(item);
      this.isAdding = false;
      this.newItem = {};
      // TODO: Add API call here
      console.log('FAQ item added:', item);
    }
  }

  updateItem() {
    if (this.editingItem) {
      const index = this.faqItems.findIndex(item => item.id === this.editingItem!.id);
      if (index !== -1) {
        this.faqItems[index] = { ...this.editingItem };
        this.isEditing = false;
        this.editingItem = null;
        // TODO: Add API call here
        console.log('FAQ item updated:', this.faqItems[index]);
      }
    }
  }

  deleteItem(id: number) {
    if (confirm('Are you sure you want to delete this FAQ item?')) {
      this.faqItems = this.faqItems.filter(item => item.id !== id);
      this.expandedItems.delete(id);
      // TODO: Add API call here
      console.log('FAQ item deleted:', id);
    }
  }

  cancelAction() {
    this.isAdding = false;
    this.isEditing = false;
    this.editingItem = null;
    this.newItem = {};
  }

  toggleItem(id: number) {
    if (this.expandedItems.has(id)) {
      this.expandedItems.delete(id);
    } else {
      this.expandedItems.add(id);
    }
  }

  toggleStatus(item: FAQItem) {
    item.isActive = !item.isActive;
    // TODO: Add API call here
    console.log('FAQ status toggled:', item);
  }

  moveItem(item: FAQItem, direction: 'up' | 'down') {
    const currentIndex = this.faqItems.findIndex(i => i.id === item.id);
    if (direction === 'up' && currentIndex > 0) {
      [this.faqItems[currentIndex], this.faqItems[currentIndex - 1]] = 
      [this.faqItems[currentIndex - 1], this.faqItems[currentIndex]];
    } else if (direction === 'down' && currentIndex < this.faqItems.length - 1) {
      [this.faqItems[currentIndex], this.faqItems[currentIndex + 1]] = 
      [this.faqItems[currentIndex + 1], this.faqItems[currentIndex]];
    }
    // Update order numbers
    this.faqItems.forEach((item, index) => {
      item.order = index + 1;
    });
    // TODO: Add API call here
    console.log('FAQ order updated');
  }
}
