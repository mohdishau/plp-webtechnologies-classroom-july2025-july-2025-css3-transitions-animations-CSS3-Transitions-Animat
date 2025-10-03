/* ========================================
   Week 7 Assignment - JavaScript
   This file demonstrates:
   1. Variable Scope (Global vs Local)
   2. Function Parameters
   3. Return Values
   4. Animation Triggers
   ======================================== */

// ========================================
// GLOBAL VARIABLES (SCOPE DEMONSTRATION)
// ========================================
// These variables are GLOBAL - they can be accessed from anywhere in the code
// They persist throughout the entire program execution

let globalCounter = 0;
const globalMessage = "I am a GLOBAL variable - accessible everywhere!";

/* 
 * FUNCTION: demonstrateScope()
 * PURPOSE: Shows the difference between global and local scope
 * DEMONSTRATES: Variable scope concepts
 * PARAMETERS: None
 * RETURNS: Nothing (void)
 */
function demonstrateScope() {
    // This is a LOCAL variable - it only exists inside this function
    // It is created when the function runs and destroyed when it ends
    let localMessage = "I am a LOCAL variable - only accessible in this function!";
    
    // We can access and modify the global counter from inside this function
    globalCounter++;
    
    // Display both global and local variables
    const output = document.getElementById('scopeOutput');
    output.innerHTML = `
        <strong>Global Variable:</strong> "${globalMessage}"<br>
        <strong>Global Counter:</strong> ${globalCounter} (incremented each time you click)<br>
        <strong>Local Variable:</strong> "${localMessage}"<br>
        <br>
        💡 <em>The local variable is created when the function runs and destroyed when it ends!</em>
    `;
    
    // Note: localMessage cannot be accessed outside this function
    // If you tried to use localMessage in another function, you'd get an error
}

// ========================================
// FUNCTION PARAMETERS DEMONSTRATION
// ========================================

/* 
 * FUNCTION: demonstrateParameters()
 * PURPOSE: Shows how functions accept parameters (input values)
 * DEMONSTRATES: Function parameters and how they work
 * PARAMETERS: None (gets values from input fields instead)
 * RETURNS: Nothing (displays results directly)
 */
function demonstrateParameters() {
    // Get values from input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Call functions with PARAMETERS - passing values to them
    const sum = addNumbers(num1, num2);
    const product = multiplyNumbers(num1, num2);
    const greeting = greetWithNumbers(num1, num2);
    
    // Display results
    const output = document.getElementById('paramOutput');
    output.innerHTML = `
        <strong>Parameter Demo Results:</strong><br>
        addNumbers(${num1}, ${num2}) = ${sum}<br>
        multiplyNumbers(${num1}, ${num2}) = ${product}<br>
        ${greeting}<br>
        <br>
        💡 <em>Parameters allow functions to work with different values each time!</em>
    `;
}

/* 
 * FUNCTION: addNumbers(a, b)
 * PURPOSE: Adds two numbers together
 * PARAMETERS: 
 *   - a: First number to add
 *   - b: Second number to add
 * RETURNS: The sum of a and b
 * DEMONSTRATES: How parameters receive values
 */
function addNumbers(a, b) {
    // a and b are PARAMETERS - they receive values when the function is called
    // They act as placeholders for the actual values passed in
    return a + b;
}

/* 
 * FUNCTION: multiplyNumbers(x, y)
 * PURPOSE: Multiplies two numbers
 * PARAMETERS:
 *   - x: First number to multiply
 *   - y: Second number to multiply
 * RETURNS: The product of x and y
 * DEMONSTRATES: Parameters can have any name (x, y instead of a, b)
 */
function multiplyNumbers(x, y) {
    // Parameter names can be anything - they're just placeholders
    // x and y work the same way as a and b in the previous function
    return x * y;
}

/* 
 * FUNCTION: greetWithNumbers(first, second)
 * PURPOSE: Creates a greeting message using numbers
 * PARAMETERS:
 *   - first: First number to include in message
 *   - second: Second number to include in message
 * RETURNS: A string message using the parameters
 * DEMONSTRATES: Parameters can be used in strings and template literals
 */
function greetWithNumbers(first, second) {
    // Parameters can be used in template literals (strings with backticks)
    return `You entered ${first} and ${second} - great choice!`;
}

// ========================================
// RETURN VALUES DEMONSTRATION
// ========================================

/* 
 * FUNCTION: demonstrateReturnValues()
 * PURPOSE: Shows how functions return values back to the caller
 * DEMONSTRATES: Return values and how they're used in calculations
 * PARAMETERS: None (gets values from input fields)
 * RETURNS: Nothing (displays results)
 */
function demonstrateReturnValues() {
    // Get input values
    const price = parseFloat(document.getElementById('price').value);
    const discountPercent = parseFloat(document.getElementById('discount').value);
    
    // Call function and store its RETURN VALUE in a variable
    const discountAmount = calculateDiscount(price, discountPercent);
    
    // Use the returned value in another calculation
    const finalPrice = calculateFinalPrice(price, discountAmount);
    
    // Display results
    const output = document.getElementById('returnOutput');
    output.innerHTML = `
        <strong>Return Value Demo:</strong><br>
        Original Price: $${price.toFixed(2)}<br>
        Discount: ${discountPercent}%<br>
        Discount Amount: $${discountAmount.toFixed(2)} (returned from calculateDiscount)<br>
        <strong>Final Price: $${finalPrice.toFixed(2)}</strong> (returned from calculateFinalPrice)<br>
        <br>
        💡 <em>The return keyword sends values back from functions!</em>
    `;
    
    // Show animated result card
    const card = document.getElementById('resultCard');
    const breakdown = document.getElementById('breakdown');
    breakdown.innerHTML = `
        Step 1: calculateDiscount(${price}, ${discountPercent}) <strong>returned</strong> ${discountAmount.toFixed(2)}<br>
        Step 2: calculateFinalPrice(${price}, ${discountAmount.toFixed(2)}) <strong>returned</strong> ${finalPrice.toFixed(2)}<br>
        Both functions used <code>return</code> to send values back!
    `;
    card.classList.add('show');
}

/* 
 * FUNCTION: calculateDiscount(price, percent)
 * PURPOSE: Calculates the discount amount
 * PARAMETERS:
 *   - price: Original price of item
 *   - percent: Discount percentage (e.g., 20 for 20%)
 * RETURNS: The dollar amount of the discount
 * DEMONSTRATES: How return sends a value back
 */
function calculateDiscount(price, percent) {
    // Calculate the discount amount
    const discount = price * (percent / 100);
    
    // The RETURN statement sends this value back to whoever called the function
    // Without return, the function would not give us the result
    return discount;
}

/* 
 * FUNCTION: calculateFinalPrice(originalPrice, discount)
 * PURPOSE: Calculates final price after discount
 * PARAMETERS:
 *   - originalPrice: Starting price
 *   - discount: Amount to subtract (returned from calculateDiscount)
 * RETURNS: The final price after applying discount
 * DEMONSTRATES: Using a returned value from another function
 */
function calculateFinalPrice(originalPrice, discount) {
    // Subtract the discount from the original price
    const final = originalPrice - discount;
    
    // Return the calculated final price
    return final;
}

// ========================================
// ANIMATION TRIGGER FUNCTIONS
// These functions demonstrate how JavaScript
// can trigger CSS animations by adding/removing classes
// ========================================

/* 
 * FUNCTION: triggerSlideAnimation()
 * PURPOSE: Triggers a CSS keyframe animation by adding a class
 * DEMONSTRATES: How JavaScript can trigger CSS animations
 * PARAMETERS: None
 * RETURNS: Nothing
 */
function triggerSlideAnimation() {
    const box = document.getElementById('slideBox');
    
    // Remove the 'active' class first (to allow re-triggering)
    box.classList.remove('active');
    
    // Force a reflow to restart the animation
    // This is a trick to make the animation restart even if class was already there
    void box.offsetWidth;
    
    // Add the 'active' class to trigger the animation
    // The CSS animation starts when this class is added
    box.classList.add('active');
}

/* 
 * FUNCTION: triggerRotateAnimation()
 * PURPOSE: Triggers rotation animation by toggling a class
 * DEMONSTRATES: Toggle-style animation control (on/off)
 * PARAMETERS: None
 * RETURNS: Nothing
 */
function triggerRotateAnimation() {
    const circle = document.getElementById('rotateCircle');
    
    // Toggle the 'spinning' class on and off
    // If it has the class, remove it (stop spinning)
    // If it doesn't have the class, add it (start spinning)
    if (circle.classList.contains('spinning')) {
        circle.classList.remove('spinning');
    } else {
        circle.classList.add('spinning');
    }
}

/* 
 * FUNCTION: triggerBounceAnimation()
 * PURPOSE: Triggers bounce animation
 * DEMONSTRATES: Resetting animations to replay them
 * PARAMETERS: None
 * RETURNS: Nothing
 */
function triggerBounceAnimation() {
    const box = document.getElementById('bounceBox');
    
    // Remove class to reset animation
    box.classList.remove('bouncing');
    
    // Force reflow
    void box.offsetWidth;
    
    // Add class to start animation
    box.classList.add('bouncing');
}

// ========================================
// COMPLETE INTEGRATION DEMONSTRATION
// This section combines all concepts together
// ========================================

/* 
 * FUNCTION: completeDemo()
 * PURPOSE: Combines all concepts - scope, parameters, return values, and animations
 * DEMONSTRATES: Integration of all Week 7 concepts in one function
 * PARAMETERS: None (gets value from input field)
 * RETURNS: Nothing (displays result)
 */
function completeDemo() {
    // 1. SCOPE: Use global variable
    globalCounter++;
    
    // 2. PARAMETERS: Get parameter value from input
    const name = document.getElementById('userName').value;
    
    // 3. RETURN VALUE: Call function with parameter and get return value
    const personalizedGreeting = createGreeting(name, globalCounter);
    
    // 4. Display result
    const output = document.getElementById('completeOutput');
    output.innerHTML = personalizedGreeting;
    
    // 5. ANIMATION: Trigger CSS animation
    output.classList.remove('show');
    void output.offsetWidth; // Force reflow
    output.classList.add('show');
}

/* 
 * FUNCTION: createGreeting(userName, visitCount)
 * PURPOSE: Creates a personalized greeting message
 * PARAMETERS:
 *   - userName: Name entered by user
 *   - visitCount: Number of times button was clicked (global counter)
 * RETURNS: A formatted HTML string with the greeting
 * DEMONSTRATES: Final demonstration combining all concepts
 */
function createGreeting(userName, visitCount) {
    // LOCAL VARIABLE: This greeting variable only exists in this function
    let greeting = `
        <strong>🎉 Complete Integration Demo 🎉</strong><br><br>
        <strong>Scope:</strong> Global counter = ${visitCount} (global variable accessed)<br>
        <strong>Parameter:</strong> Your name "${userName}" was passed as a parameter<br>
        <strong>Return Value:</strong> This entire message is being RETURNED from createGreeting()<br>
        <strong>Animation:</strong> This output box used CSS animation to fade in!<br>
        <br>
        💡 <em>All concepts working together successfully!</em>
    `;
    
    // RETURN the greeting string back to the caller
    return greeting;
}