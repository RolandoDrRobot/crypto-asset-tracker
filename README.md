# Crypto Asset Tracker

## Description

Crypto Asset Tracker is a cryptocurrency tracking application that allows users to select a crypto asset symbol (like BTC, ETH, etc.) and view the performance of that asset over different time intervals (week, month, year). Data is fetched from a public API, stored in local storage to avoid frequent reloads, and visualized in interactive charts using Recharts.

Additionally, the project includes the option to connect a self-custody wallet such as MetaMask, allowing users to view the performance of the assets in their wallet.

## Features

- **Crypto Asset Selection**: Allows users to select a crypto asset symbol (e.g., BTC, ETH).
- **Historical Data Fetching**: Fetches the last week's, month's, and year's data for the selected asset from a public API.
- **Cache Storage**: Utilizes the local storage of the browser to avoid re-fetching data constantly.
- **Interactive Chart**: Displays the performance of the selected asset in a line chart (using Recharts).
- **Performance Comparison**: Allows comparing the performance of the selected asset between different time periods (week, month, year).
- **Unit Tests**: Includes unit tests for business logic and UI.

## Requirements

To run the project on your local machine, make sure you have:

- [Node.js](https://nodejs.org/en/) v20 or higher

## Installation

Clone this repository to your local machine, install the dependencies:

  ```bash
   git clone https://github.com/your-username/crypto-asset-tracker.git
   cd crypto-asset-tracker
   npm install
   npm run dev
  ```

## Usage
1. Select a Crypto Asset: Use the dropdown at the top of the interface to select a crypto asset (e.g., BTC, ETH).
2. View Data: You will see the performance chart for the selected asset over different time ranges (week, month, year).
3. Compare Performance: The chart will also show the performance comparison between the selected time intervals.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- React Redux: A library for managing the global state of the app.
- Vite: A fast build tool for web applications.
- Tailwind CSS: A utility-first CSS framework for fast and customizable styling.
- TypeScript: A superset of JavaScript with static typing.
- Recharts: A charting library for React.
- Axios: An HTTP client for making API requests.
- CoinGecko API: A public API for fetching cryptocurrency data.
- Jest: for testing purporses

## Additional Features
MetaMask Support: Users are able to connect their wallets.

## Test
The project includes unit tests to verify the behavior of the business logic.

  ```bash
   npx jest 
  ```

## Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push the branch (git push origin feature/new-feature).
5. Create a Pull Request.

## Screenshot
![Captura de pantalla 2025-04-28 a la(s) 9 14 25 p  m](https://github.com/user-attachments/assets/74200fc8-4549-45b5-b58d-9d1106e96c8f)

<img width="926" alt="Captura de pantalla 2025-04-29 a la(s) 1 05 10 a  m" src="https://github.com/user-attachments/assets/6c6e578f-84b0-4fcc-a87f-777647f046c8" />
