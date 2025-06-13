 react-lottery-mini-project
A modular and configurable React lottery game that uses lifting state up and reusable components to generate dynamic tickets and customizable win conditions.

This is a simple React Lottery Game project built using Vite. Initially, the game generates a random lottery ticket and declares a win if the sum of the ticket numbers equals 15.

I have now structured the application by breaking it down into modular components to improve readability, maintainability, and scalability. The logic has been refactored to enhance reusability, allowing the game to work not just for a hardcoded sum of 15, but for any configurable winning number n.

In addition, the game now supports generating n random numbers per ticket rather than being limited to a fixed size. This makes the core functionality more dynamic and extensible.

I have also applied the concept of lifting state up to enable better control and data flow between components. Shared state (like the generated ticket and result logic) now resides in the parent component and is passed down via props, allowing child components to remain reusable and stateless.

