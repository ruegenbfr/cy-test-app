import { Component, OnInit } from '@angular/core';
import { NavItem } from '../model/nav-item';

@Component({
  selector: 'app-mat-context-menu',
  templateUrl: './mat-context-menu.component.html',
  styleUrls: ['./mat-context-menu.component.css']
})
export class MatContextMenuComponent implements OnInit {

    navItems: NavItem[] = [
        {
          displayName: 'AngularMix',
          iconName: 'close',
          children: [
            {
              displayName: 'Speakers',
              iconName: 'group',
              children: [
                {
                  displayName: 'Michael Prentice',
                  iconName: 'person',
                  route: 'michael-prentice',
                  children: [
                    {
                      displayName: 'Delight your Organization',
                      iconName: 'star_rate',
                      route: 'material-design'
                    }
                  ]
                },
                {
                  displayName: 'Stephen Fluin',
                  iconName: 'person',
                  route: 'stephen-fluin',
                  children: [
                    {
                      displayName: 'What\'s up with the Web?',
                      iconName: 'star_rate',
                      route: 'what-up-web'
                    }
                  ]
                },
                {
                  displayName: 'Mike Brocchi',
                  iconName: 'person',
                  route: 'mike-brocchi',
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star_rate',
                      route: 'my-ally-cli'
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star_rate',
                      route: 'become-angular-tailer'
                    }
                  ]
                }
              ]
            },
            {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              children: [
                {
                  displayName: 'Delight your Organization',
                  iconName: 'star_rate',
                  route: 'material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'feedback'
            }
          ]
        }
      ];

  constructor() { }

  ngOnInit() {
  }

}
