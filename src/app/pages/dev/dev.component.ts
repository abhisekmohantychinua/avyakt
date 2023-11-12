import { Component } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent {
  developerInfo = {
    name: 'Abhisek Mohanty',
    profile: './assets/profile.jpg',
    role: 'Full Stack Developer',
    bio: 'Passionate about creating innovative solutions.',
    socialLinks: {
      github: 'https://github.com/abhisekmohantychinua',
      linkedin: 'https://www.linkedin.com/in/abhisek-mohanty-3a2241235/',
      facebook: 'https://www.facebook.com/abhisek.mohanty.79069/',
      portfolio: 'https://coderabhisek.onrender.com/',
    },
  };
}
