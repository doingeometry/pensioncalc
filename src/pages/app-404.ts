import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { styles } from './blog-styles';

import { styles as sharedStyles } from '../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-404')
export class AppBlog extends LitElement {
    static styles = [
      sharedStyles,
      styles,
      css`
        #j404 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #j404 {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }
      }

    `
    ]

    constructor() {
      super();
    }

    render() {
        return html`
          <app-header ?enableBack="${true}"></app-header>
          <main>
          <div id="j404">
          <sl-card>
            <h3>404 - Page Not Found</h3>
            <p>Oops! It looks like you've stumbled upon a page that doesn't exist. Don't worry though, just click the 'Go Home' button below to get back on track.</p>
            <sl-button href="${(import.meta as any).env.BASE_URL}" variant="primary" outline">
                Go Home
            </sl-button>
          </sl-card>
          </div>
  </main>
        `;
    }
}