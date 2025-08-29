# Overview

This is a magical birthday celebration web application built with React and Express. The application creates an interactive, princess-themed birthday experience with multiple scenes including countdown timers, princess selection, prince encounters, castle journeys, and birthday cake celebrations. The app features rich animations, sparkle effects, and a whimsical user interface designed for creating memorable birthday experiences.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks for local state, TanStack Query for server state management
- **Animation**: Framer Motion for smooth transitions and interactive animations
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom magical color palette and CSS variables for theming

## Backend Architecture
- **Runtime**: Node.js with Express framework
- **Development Server**: Vite for hot module replacement and fast development builds
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Error Handling**: Centralized error middleware with proper status codes and JSON responses
- **Logging**: Custom request logging middleware for API endpoints with response time tracking

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **ORM**: Drizzle ORM for type-safe database queries and schema management
- **Schema**: User table with username/password fields and UUID primary keys
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Fallback Storage**: In-memory storage implementation for development and testing

## Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Model**: Simple username/password authentication system
- **Security**: Password hashing and secure session configuration

## External Dependencies
- **Database**: Neon PostgreSQL for production database hosting
- **Image Assets**: Unsplash and Pixabay for princess, castle, and celebration imagery
- **Fonts**: Google Fonts integration (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Development Tools**: 
  - Replit integration for development environment
  - ESBuild for production bundling
  - TypeScript compiler for type checking
- **UI Framework**: Extensive Radix UI component suite for accessibility and interaction primitives