import { Component } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [ CommonModule, FormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';
  submitted = false;
  error = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (!this.name || !this.email || !this.message) return;

    this.contactService
      .submitMessage({ name: this.name, email: this.email, message: this.message })
      .then(() => {
        this.submitted = true;
        this.name = '';
        this.email = '';
        this.message = '';
      })
      .catch((err) => {
        this.error = err?.message || 'Failed to submit message. Please try again.';
      });
  }
}

