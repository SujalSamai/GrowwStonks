# GrowwStonks - Frontend Assignment from Groww

## Problem Statement
Create a web application for a stocks/etfs broking website

App contains mainly two pages:
1. Explore page: A page with Top gainers and Losers section.These
two are in tabs. Each section contains a grid of cards (20 in numbers
and a CTA to load more) that shows information about stocks/etfs.
When this card is clicked it should route the user to the product page
of the same stocks/etfs.
2. Product Page: A page of stocks/etfs showing basic information about
it and line graph of prices.
    - Each page contains a common header showing application name and
a search bar.
    - This search bar should show suggested stocks when user types in it.

## API Used
All the required data could be fetched from API endpoint provided by
https://www.alphavantage.co. 

## Successfully Implemented
- Landing page has section of Top Gainers and Losers with different tabs for them. The section contains grid of 20 cards and clicking on each card will redirect to the product page of same stock/etf.
- Product page contains basic Company Overview which is fetched from Alpha Vintage's Fundamental Data : Company Overview
- Each page contains a common header showing application name and
a search bar.
- The search bar show suggested stocks when user types in it.
- Added a dark/light theme to switch themes in the application.
- Generated a standard API key through Alpha Vantage to access endpoints which has `5` API requests per minute & `100` API requests per day limit.
- Used `useContext()` hook for handling state
- Handled errors received from API
- Followed a standard `Next.js` folder structure.
- UI is responsive for all standard Mobile, Tablets and Laptop screen sizes.
- Deployed the working app on Vercel. Link - https://groww-stonks.vercel.app
- Did not use any utility library, just used Apex Charts for creating chart
- Created a new UI, different from the given sample

## Things Learnt
- How to enable dark/light theme using Tailwind in very few steps
- Handling Context using Context API
- Working with a new & regularly updating API.
- Learnt about various financial terms.
- Tried various libraries to create Charts for the data.
- Learnt how to implement search functionality with data coming from an API endpoint.
- Learnt about Server side rendering in depth
- Explored a lot of new concepts in Next.js documentation

## Problems faced
- The API limits testing as it is strictly rate limited & the limit is also very low.
- The API responses aren't well structured which makes the application very error prone.
- Not able to find a solution to cache the data coming from API for a fixed period of time.

## Sample Images
### Landing Page with Top Gainers and Top Losers

![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/d530acb8-0a9a-489d-a318-5bce6fb21263)
![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/dfd8cd8a-2022-469f-946e-86d78c204602)
![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/56176e4c-e76a-4714-a38e-b8868bfa3ae9)
![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/402b5883-da0f-40ca-92dc-b10c34712858)


### Product Page with Chart & Other Information

![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/c93506ba-d96a-4b00-84f5-0761c6a68ad5)
![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/d0014706-bdea-4d98-86ea-380dce33f862)


### Responsive UI

![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/3c22b802-9d04-4393-8ced-1b7036cbeade)
![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/f96f9843-bac5-4017-83e2-b5c7808ba822)
![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/b58eaef7-fdfe-4ac3-9fd7-32b94d51e2f9)


### Search Functionality

![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/f1dd1e3f-916a-453b-976c-efc38748de06)
![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/9f7f88c8-1786-43c3-8db8-9f7bbdf648af)


### Error Handling

![image](https://github.com/SujalSamai/GrowwStonks/assets/87236576/86ecedb6-a3e0-4b33-b0b4-969cec7a12a0)



