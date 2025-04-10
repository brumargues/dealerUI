# Dealer UI

A frontend interface project for casino dealers that provides real-time visualization for auto and manual roulette tables.

## Overview

Dealer UI is a multi-screen application designed for casino environments that connects to the casino's API to interface with both automatic and manual roulette tables in the live studio. The application displays information on both TV screens (for dealer viewing) and tablets (for dealer control).

### Key Features

- **Multi-device Support**: Displays on both TV screens and dealer tablets
- **Real-time Visualization**: Shows current game status, bet data, and results
- **Dealer Controls**: Interface for dealers to:
  - Start a new round
  - Stop the current round
  - Cancel a round
  - Close the table
- **API Integration**: Connects to the casino's backend systems to fetch and push game data

## Architecture

The application follows a component-based architecture:

- **TV Display**: Shows game status, history, and statistics
- **Tablet Interface**: Control panel for dealers with touch-optimized interface
- **API Service**: Handles communication with the casino backend
- **State Management**: Central store for application state
- **Event Bus**: Manages real-time updates and synchronization between devices

## License

This project is proprietary and confidential. Unauthorized copying, transferring, or reproduction of the contents of this project, via any medium is strictly prohibited.

