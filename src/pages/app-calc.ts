import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './calc-styles';

import { styles as sharedStyles } from '../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import { serialize } from '@shoelace-style/shoelace/dist/utilities/form.js';

@customElement('app-calc')
export class AppCalc extends LitElement {
    static styles = [
      sharedStyles,
      styles, css`
      #jNhsCalcWhole {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #jNhsCalc,
      #jNhsCalcNotes {
        padding: 18px;
        padding-top: 0px;
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
        #jNhsCalcWhole {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #jNhsCalc {
          margin-right: 64px;
        }
      }

    `]

    static get properties() {
      return {
        averageSalary: { type: Number },
        yearsInScheme: { type: Number },
        expectedPension: { type: Number },
        buttonPressed: { type: Boolean }
      }
    }

    @property({ type: Number })
    averageSalary: number;

    @property({ type: Number })
    yearsInScheme: number;

    @property({ type: Number })
    expectedPension: number;

    @property({ type: Number })
    buttonPressed: boolean;

    constructor() {
      super();
      this.averageSalary = 0;
      this.yearsInScheme = 0;
      this.expectedPension = 0;
      this.buttonPressed = false;
    }

    render() {
        return html`
          <app-header ?enableBack="${true}"></app-header>
            <main>

            <h2>NHS Pension Calculator</h2>

            <div id="jNhsCalcWhole">
              <sl-card id="jNhsCalc">
              <form @submit=${this.calculatePension}>
                <sl-input class="label-on-left" type="number" label="Average Salary" id="average-salary" name="average-salary" help-text="Use gross, pensionable earnings." @change=${this.updateAverageSalary}></sl-input><br>
                <sl-input class="label-on-left" type="number" label="Years in Scheme" id="years-in-scheme" name="years-in-scheme" help-text="Years where you were actively contributing to your NHS pension." @change=${this.updateYearsInScheme}></sl-input><br>
                <sl-button variant="success" type="submit">Calculate Pension</sl-button>
              </form>
              <p><span id="result" ?hidden=${!this.buttonPressed}>Expected Yearly Pension: ${this.expectedPension.toFixed(0)} £ per year <br><br> <em>(in today's money, not accounting for inflation)</em></span></p>
              </sl-card>

            <sl-card id="jNhsCalcNotes">
              <h2>Please Note:</h2>
              <p>This calculator app is designed specifically for the 2015 NHS Pension scheme.
              It is not intended for use with any other pension schemes, such as the 1995 or
              2008 NHS Pension schemes.
              </p>
              <p>
                If you want an official estimate of your pension benefits under the 2015 NHS Pension
                scheme, it is recommended that you contact a professional or an official source.
                This calculator is intended for estimation purposes only and should not be used
                as a substitute for an official estimate. It is important to note that the
                results provided by this calculator may not be accurate and should not be relied
                upon for any official or financial decisions.
              </p>
            </sl-card>
            </div>

          </main>
        `;
    }

    updateAverageSalary(event: Event) {
      const value = parseFloat((event.target as HTMLInputElement).value);
      this.averageSalary = isNaN(value) ? 0 : value;
    }

    updateYearsInScheme(event: Event) {
      const value = parseFloat((event.target as HTMLInputElement).value);
      this.yearsInScheme = isNaN(value) ? 0 : value;
    }



    calculatePension(event: Event) {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const data = serialize(form) as {
        'average-salary': string,
        'years-in-scheme': string
      };

      this.averageSalary = parseFloat(data['average-salary']);
      this.yearsInScheme = parseFloat(data['years-in-scheme']);

      this.expectedPension = this.averageSalary * this.yearsInScheme * (1/54);
      this.buttonPressed = true;
    }

}