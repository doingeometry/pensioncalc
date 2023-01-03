import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome to PensionCalc!';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      #jHomeButtons {
        display: flex;
        justify-content: center;
      }

      #jHomeBlogButton,
      #jHomeCalcButton {
        margin: 10px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
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
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PensionCalc',
        text: 'Estimate your NHS Pension & more!',
        url: 'https://pensioncalc.co.uk',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>
            <p>
              This tool is designed to help you estimate your pension benefits
              under the 2015 NHS Pension scheme.  We hope you find this
              calculator helpful in planning for your retirement.
            </p>
            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share PensionCalc!</sl-button>`
              : null}
            <div id="jHomeButtons">
              <sl-button href="${(import.meta as any).env.BASE_URL}nhs-calc" variant="primary" id="jHomeCalcButton">
                  Go to Calculator
              </sl-button>

              <sl-button href="${(import.meta as any).env.BASE_URL}blog/nhs-pension-should-i-opt-out" variant="primary" outline id="jHomeBlogButton">
                Should I opt out?
              </sl-button>
            </div>
          </sl-card>

          <sl-card id="infoCard">
              <div slot="header">
                <h2>Disclaimer</h2>
              </div>
              <p id="mainInfo">
                Please note that this calculator
                is for estimation purposes only and is not intended to provide an official estimate of
                your pension benefits. If you want to get an official estimate, please contact a
                professional or an official source. Thank you for using this tool!
              </p>
              <p id="jFurtherInfo">
              The NHS 2015 pension scheme is based on an individual's salary and length of service. The amount of pension received is determined by multiplying an individual's final pensionable pay by their length of service and an accrual rate of 1/54th. The pension is paid out in the form of an annuity. It's important to note that the calculation of the NHS pension can vary based on individual circumstances. It's always a good idea to seek professional advice when planning for retirement.
              </p>
          </sl-card>
        </div>
        <pwa-install>Install PensionCalc</pwa-install>
      </main>
    `;
  }
}
