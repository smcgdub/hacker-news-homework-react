# **Hacker News Homework Project None React Testing Information?**

![Homepage displayed on multiple devices](./src/assets/images/am-i-responsive.png)

<hr>

## **Table of contents** ##

### **1. Automated Testing** ###

* 1.1 HTML Code Validating 
* 1.2 CSS Code Validating
* 1.3 React Tests

### **2. Manual Testing** ###

* 2.1 Manual testing desktop
* 2.2 Manual testing tablet
* 2.3 Manual testing mobile

### **3. Testing Issues Found** ###

<hr>

### **1. Automated Testing** ###

**1.1 HTML Code Validating**

All of the HTML files were tested on the [W3C HTML Markup Validation website](https://validator.w3.org/)
The HTML test came back showing document checking completed, no errors or warnings to show

**1.2 CSS Code Validating**

The main CSS files were tested on the [W3C CSS  Validation website](https://jigsaw.w3.org/css-validator/) 
The CSS test came back showing no errors in the CSS code

**1.3 React Tests**

The React app only has 3 components, they are the Navbar, the Header and the Newscard. In the components folder there is a sub folder titled `__tests__` In this folder i have created and written tests for each of the components. The files for testing are:

1. navbar.test.js
2. navbar.test.js
3. newscard.test.js

These tests can be ran by opening the terminal and inputting the command `npm test` this will run the tests and show the results in the terminal.
<hr>

### **2. Manual Testing** ###

**2.1 Manual testing desktop**



<hr>

**2.3 Manual testing tablet**


<hr>

**2.3 Manual testing mobile**

<hr>

### **3. Testing Issues Found** ###

When i run the React tests in the terminal all of the 3 components are passing their tests, however this error is appearing above the passed test results:

`  ● Console

    console.error
      Warning: Received `true` for a non-boolean attribute `div`.
      
      If you want to write it to the DOM, pass a string instead: div="true" or div={value.toString()}.
          at div
          at div
          at Header

       9 | // Test the Header component
      10 | test('Should render Header', () => {
    > 11 |   render(<Header />);
         |   ^
      12 |   const headerComponent = screen.getByTestId('header-component');
      13 |   expect(headerComponent).toBeInTheDocument();
      14 |   expect(headerComponent).toHaveTextContent('Welcome To Hacker News');`

As i am only learning React testing 1 day before this project is submitted if i do not manage to resolve the issue this is to let the assessor know i am aware of the errors existence. 