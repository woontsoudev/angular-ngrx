import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-base',
  template: `
  <h2 class="title">Buttons</h2>
  <div class="row">
    <div class="col">
      <article>
        <h4>Theme buttons</h4>
        <button type="button" class="btn btn-theme-primary mr-1 mb-1 mb-1">Primary</button>
        <button type="button" class="btn btn-theme-secondary mr-1 mb-1">Secondary</button>
        <button type="button" class="btn btn-theme-success mr-1 mb-1">Success</button>
        <button type="button" class="btn btn-theme-danger mr-1 mb-1">Danger</button>
        <button type="button" class="btn btn-theme-warning mr-1 mb-1">Warning</button>
        <button type="button" class="btn btn-theme-info mr-1 mb-1">Info</button>
        <button type="button" class="btn btn-theme-light mr-1 mb-1">Light</button>
        <button type="button" class="btn btn-theme-dark mr-1 mb-1">Dark</button>
      </article>
      <article>
        <h4>Theme buttons with icons</h4>
        <button type="button" class="btn btn-theme-icon-primary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Primary
        </button>
        <button type="button" class="btn btn-theme-icon-secondary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Secondary
        </button>
        <button type="button" class="btn btn-theme-icon-success mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Success
        </button>
        <button type="button" class="btn btn-theme-icon-danger mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Danger
        </button>
        <button type="button" class="btn btn-theme-icon-warning mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Warning
        </button>
        <button type="button" class="btn btn-theme-icon-info mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Info
        </button>
        <button type="button" class="btn btn-theme-icon-light mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Light
        </button>
        <button type="button" class="btn btn-theme-icon-dark mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Dark
        </button>
      </article>
      <article>
        <h4>Theme buttons with icons small</h4>
        <button type="button" class="btn btn-sm-theme-primary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Primary
        </button>
        <button type="button" class="btn btn-sm-theme-secondary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Secondary
        </button>
        <button type="button" class="btn btn-sm-theme-success mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Success
        </button>
        <button type="button" class="btn btn-sm-theme-danger mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Danger
        </button>
        <button type="button" class="btn btn-sm-theme-warning mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Warning
        </button>
        <button type="button" class="btn btn-sm-theme-info mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Info
        </button>
        <button type="button" class="btn btn-sm-theme-light mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Light
        </button>
        <button type="button" class="btn btn-sm-theme-dark mr-1 mb-1">
          <fa-icon [icon]="['fas', 'sync-alt']" size="sm"></fa-icon> Dark
        </button>
      </article>
    </div>
    <div class="col">
      <article>
        <h4>Icon Buttons</h4>
        <button type="button" class="btn btn-icon-primary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-icon-secondary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-icon-success mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-icon-danger mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-icon-warning mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-icon-info mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-icon-light mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-icon-dark mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
      </article>
      <article>
        <h4>Flat buttons</h4>
        <button type="button" class="btn btn-flat-primary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-flat-secondary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-flat-success mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-flat-danger mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-flat-warning mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-flat-info mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-flat-light mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
        <button type="button" class="btn btn-flat-dark mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']"></fa-icon>
        </button>
      </article>
      <article>
        <h4>Icon Buttons small</h4>
        <button type="button" class="btn btn-sm-icon-primary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
        <button type="button" class="btn btn-sm-icon-secondary mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
        <button type="button" class="btn btn-sm-icon-success mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
        <button type="button" class="btn btn-sm-icon-danger mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
        <button type="button" class="btn btn-sm-icon-warning mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
        <button type="button" class="btn btn-sm-icon-info mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
        <button type="button" class="btn btn-sm-icon-light mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
        <button type="button" class="my-btn btn-sm-icon-dark mr-1 mb-1">
          <fa-icon [icon]="['fas', 'bell']" size="sm"></fa-icon>
        </button>
      </article>
    </div>
  </div>
  <h2 class="title">Fonts</h2>
  <div class="row">
    <div class="col">
      <article>
        <h4>Text</h4>
        <p>Ut sed est nec dui interdum congue sed quis nisi. Morbi ullamcorper vulputate mi, sed imperdiet metus. Donec
          sagittis lacus nec dignissim viverra. Proin bibendum ante a sapien bibendum vehicula. Proin tincidunt velit nec
          ante convallis, ut lobortis est sagittis.</p>
      </article>
    </div>
    <div class="col">
        <article>
          <h4>Headlines</h4>
          <h1>Headline</h1>
          <h2>Title</h2>
          <h4>Subheading</h4>
          <p>Text body</p>
        </article>
      </div>
  </div>
  <h2 class="title">Icons</h2>
  <div class="row">
    <div class="col">
      <article>
        <fa-icon class="mr-1" [icon]="['fas', 'angry']" size="lg" [mask]="['fas', 'square']"></fa-icon>
        <fa-icon class="mr-1" [icon]="['fas', 'bell']" size="lg"></fa-icon>
        <fa-icon class="mr-1" [icon]="['fas', 'user']" size="lg"></fa-icon>
        <fa-icon class="mr-1" [icon]="['fas', 'sync-alt']" size="lg"></fa-icon>
      </article>
    </div>
  </div>
  `,
  styleUrls: ['../ui-library.component.scss']
})

export class UiBaseComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
