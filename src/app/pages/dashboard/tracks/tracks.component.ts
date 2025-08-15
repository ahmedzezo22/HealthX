import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface Track {
  id: number;
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
  participants: number;
  maxParticipants: number;
}

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent {
  tracks: Track[] = [
    {
      id: 1,
      title: 'Artificial Intelligence in Healthcare',
      description: 'AI-based solutions to improve diagnosis and decision support.',
      icon: '🤖',
      isActive: true,
      participants: 45,
      maxParticipants: 100
    },
    {
      id: 2,
      title: 'Smart Medical Education',
      description: 'Digital learning and training platforms for healthcare practitioners.',
      icon: '📚',
      isActive: true,
      participants: 32,
      maxParticipants: 80
    },
    {
      id: 3,
      title: 'Community Health and Prevention',
      description: 'Community prevention and early risk monitoring.',
      icon: '🏥',
      isActive: true,
      participants: 28,
      maxParticipants: 60
    },
    {
      id: 4,
      title: 'Digital Mental Health',
      description: 'Mental health support applications and behavioral analytics.',
      icon: '🧠',
      isActive: false,
      participants: 0,
      maxParticipants: 50
    }
  ];

  isAdding = false;
  isEditing = false;
  editingTrack: Track | null = null;
  newTrack: Partial<Track> = {};

  startAdding() {
    this.isAdding = true;
    this.newTrack = {
      title: '',
      description: '',
      icon: '🎯',
      isActive: true,
      participants: 0,
      maxParticipants: 100
    };
  }

  startEditing(track: Track) {
    this.isEditing = true;
    this.editingTrack = { ...track };
  }

  saveTrack() {
    if (this.isAdding && this.newTrack.title && this.newTrack.description) {
      const track: Track = {
        id: this.tracks.length + 1,
        title: this.newTrack.title,
        description: this.newTrack.description,
        icon: this.newTrack.icon || '🎯',
        isActive: this.newTrack.isActive || true,
        participants: 0,
        maxParticipants: this.newTrack.maxParticipants || 100
      };
      this.tracks.push(track);
      this.isAdding = false;
      this.newTrack = {};
      // TODO: Add API call here
      console.log('Track added:', track);
    }
  }

  updateTrack() {
    if (this.editingTrack) {
      const index = this.tracks.findIndex(t => t.id === this.editingTrack!.id);
      if (index !== -1) {
        this.tracks[index] = { ...this.editingTrack };
        this.isEditing = false;
        this.editingTrack = null;
        // TODO: Add API call here
        console.log('Track updated:', this.tracks[index]);
      }
    }
  }

  deleteTrack(id: number) {
    if (confirm('Are you sure you want to delete this track?')) {
      this.tracks = this.tracks.filter(t => t.id !== id);
      // TODO: Add API call here
      console.log('Track deleted:', id);
    }
  }

  cancelAction() {
    this.isAdding = false;
    this.isEditing = false;
    this.editingTrack = null;
    this.newTrack = {};
  }

  toggleTrackStatus(track: Track) {
    track.isActive = !track.isActive;
    // TODO: Add API call here
    console.log('Track status toggled:', track);
  }
}
