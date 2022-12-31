# NHS Pension Calculator
#### Video Demo:  https://www.youtube.com/watch?v=pI3HloGjCsw
#### Description:
The NHS Pension calculator is a simple progressive web app. The app also contains a blog section where information about the NHS Pension can be found. It will also be hosted on Azure and will be public on pensioncalc.co.uk - hopefully very soon. The choice of the project was based on the fact that it had to be something with a future beyond CS50.

## The current state of the project:
I am submitting this project as a first version, but will continue to work on it in the future, especially if it manages to attract any organic traffic. For this reason the product is SEO-optimized: mobile optimized and high pagespeed. The blog section is also keyword-rich and caters to a question which according to some basic research may be easy to rank for. The app is designed specifically for the 2015 NHS Pension scheme, and presents the results in today's money, without accounting for inflation. It also provides users with a few notes about the calculations and the limitations of the app. It allows users to input their average salary and years in the scheme, and calculates their expected yearly pension based on the 2015 NHS Pension scheme. This calculation is performed when the user clicks the "Calculate Pension" button, and the resulting expected pension is displayed on the screen. The calculator app also includes a section with notes to provide additional context and information to the user about the calculations and the pension scheme. Overall, the app aims to help users better understand and plan for their pensions in the NHS. There are plenty of features that will be implemented.

### The future of the project:
The future of pensioncalcs.co.uk involves the following updates:
- Make a better design, allow for light/dark mode.
- Launch on Google Play Store and Apple Store.
- Allow for separate entries for each year in the scheme, leading to more accurate estimates.
- Account for inflation.
- Calculate lifetime contributions based on current rates.
- Calculators for older NHS pension schemes, and combined pensions.
- Comparison with other pension schemes.
- More blog posts about the pension and other similar pensions in the UK.
- More calculators for other pensions such as the teacher's pension.

### Challenges faced:
 - The main difficulty in setting up this final project was not in the actual building of the calculator, but in understanding PWAs, the framework (lit/shoelace/typescript), and hosting on Azure.
 - The calculator itself was a very simple implementation: divide the average salary by 54, multiply by years spent in the scheme.
 - There were numerous challenges in working with typescript as there is much less documentation available online compared to javascript.
 - The modern libraries I worked with such as Shoelace styles were excellent in creating a solid end-product without much work. However, the syntax is very cryptic, especially for someone who is not well versed in Js. Looking forward to use this in the future, however.
 - Getting html native forms to work was very easy, but the current implementation required "serializing" the FormData.

 ### Disclaimer:
 The NHS Pension Calculator offers a very simplistic estimate of an NHS Pension. The actual calculation depends on individual circumstances and many variables, many of which will be slowly added to the app. For financial planning purposes it is always a good idea to talk to a professional.

 ### Closing note:
 If, for some reason, you are not CS50 staff and reading this - consider taking the CS50 course. I was tech-savvy but could not write a line of code before taking the course. Two months later I feel confident that, given time, I could create anything. I highly doubt there is a better introductory course to computer science and regret not doing it earlier.
