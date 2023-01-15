import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { styles } from './blog-styles';

import { styles as sharedStyles } from '../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-blog1')
export class AppBlog extends LitElement {
    static styles = [
      sharedStyles,
      styles,
      css`
        #jBlog1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #jCalcLink {
        display: flex;
        justify-content: center;
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
        #jBlog1 {
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
          <main>
          <div id="jBlog1">
          <h2>Should I Opt Out of the NHS Pension Scheme?</h2>
          <sl-card>
            <h3>The Importance of Retirement Planning and the Role of the NHS Pension Scheme</h3>
            <p>Retirement planning is a <strong>crucial</strong> aspect of financial planning and is necessary to ensure you have the resources you need for a comfortable and secure retirement. One of the main tools for retirement planning in the UK is the National Health Service (NHS) pension scheme, which offers various benefits to eligible NHS employees. In this article, we will examine the benefits of the NHS pension scheme and the potential consequences of opting out.</p>
            <div id="jCalcLink">
              <p>Use our <a href="/nhs-calc">NHS Pension Calculator</a> to estimate your pension at retirement.</p>
            </div>
            <h3>The Benefits of the NHS Pension Scheme</h3>
            <p>The NHS pension scheme is a <strong>defined benefit pension</strong> that provides a guaranteed income in retirement and death in service benefits to its members. The amount of pension received is based on an individual's salary and length of service, and it is paid every four weeks in the form of an annuity. In addition to the regular pension payments, the NHS pension scheme also offers a range of benefits, including survivor benefits for a spouse, civil partner, or nominated beneficiary.</p>
            <h3>Even if You Don't Plan to Retire in the UK, the NHS Pension is a Good Thing for You</h3>
            <p>If you don't plan to retire in the UK, you may be wondering whether it is worth participating in the NHS pension scheme. The short answer is yes, as the NHS pension can be a valuable source of financial security <strong>even if you plan to retire abroad</strong>. One of the key benefits of the NHS pension scheme is its flexibility. Members have the option to take their pension as a lump sum, which can be used to fund retirement abroad or to invest in other assets. Additionally, the NHS pension scheme allows for the transfer of pension benefits to a foreign pension scheme, providing even more flexibility for those who plan to retire abroad.</p>
            <h3>It's Almost Impossible to Find a Better Alternative to the NHS Pension</h3>
            <p>When it comes to retirement planning, it is important to consider all of the options available and make an informed decision about the best course of action. While it may be tempting to opt out of the NHS pension scheme in search of a potentially better alternative, the truth is that it is almost impossible to find a pension scheme that offers the same level of benefits as the NHS pension. The NHS pension scheme is a defined benefit pension, which means that it provides a guaranteed income in retirement based on salary and length of service. It is almost unheard of to find another pension scheme that offers the same level of guaranteed income, making the NHS pension an extremely valuable option for retirement planning.</p>
            <h3>When Considering Opting Out of the NHS Pension Scheme</h3>
            <p>When considering whether to opt out of the NHS pension scheme, it is important to weigh the potential benefits of doing so against the potential consequences. While it may be tempting to search for a potentially better alternative, it is almost certain that you will not be able to find a pension scheme that offers the same level of benefits as the NHS pension. As such, it is important to carefully consider all of the factors before making a decision about opting out.</p>
            <h3>Average Pensions in the NHS</h3>
            <p>It is important to consider the potential benefits of participating in the NHS pension scheme, including the average pensions received by members. While the amount of pension received will depend on a variety of factors including salary and length of service, the average pension for a consultant is around £50,000 per year. For nurses, the average pension range is between £20,000 and £30,000 per year. However, it is worth noting that the average pension may not be representative of the pension you will receive, as the amount of pension received will depend on your individual circumstances. It is important to consider all of the factors that will affect your pension, including salary and length of service, when planning for retirement.</p>
            <h3>Opting Out of the NHS Pension Scheme</h3>
            <p>While the NHS pension scheme offers a range of benefits, it is important to carefully consider the potential consequences of opting out. One of the main consequences of opting out is that you will no longer be eligible for the guaranteed income provided by the defined benefit component of the pension. Additionally, you will lose out on the opportunity to make additional contributions through the defined contribution component, which could potentially increase your pension benefits through investment returns. It is important to carefully consider the potential consequences of opting out before making a decision.</p>
            <h3>Conclusion</h3>
            <p>In conclusion, the NHS pension scheme is an important tool for retirement planning in the UK. It offers a range of benefits, including a guaranteed income in retirement, death in service benefits, and the opportunity to make additional contributions through the defined contribution component. While it may be tempting to opt out in search of a potentially better alternative, it is almost certain that you will not be able to find a pension scheme that offers the same level of benefits as the NHS pension. As such, it is important to carefully consider all of the factors before making a decision about opting out.</p>
            <h3>Further Reading</h3>
            <p>Here are a few good sources for further reading on the NHS pension:</p>
            <ol>
              <li>The <a href="https://www.nhsbsa.nhs.uk/pensions">NHS Business Services Authority website</a> provides detailed information on the different pension schemes available to NHS employees, as well as tools and resources for calculating pensions and understanding the benefits of the scheme.</li>
              <li>The <a href="https://www.nhsrf.org/">NHS Retirement Fellowship</a> is a charity that provides support, advice, and information to NHS employees on a wide range of retirement-related issues, including the NHS pension.</li>
              <li>The <a href="https://www.nhspension.org.uk/">NHS Pensions website</a> is a comprehensive resource for understanding the different aspects of the NHS pension, including how it is calculated, the benefits available, and the options for taking your pension.</li>
              <li>The <a href="https://www.gov.uk/public-sector-pensions">Public Sector Pensions Agency</a> is a government agency that provides information on the different public sector pension schemes, including the NHS pension.</li>
              <li>The <a href="https://www.moneyadviceservice.org.uk/en/categories/pensions">Money Advice Service</a> is a free, independent service that provides information and advice on pensions and retirement planning.</li>
            </ol>
          </sl-card>
          </div>
  </main>
        `;
    }
}