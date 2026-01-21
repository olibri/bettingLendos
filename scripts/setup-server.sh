#!/bin/bash

# Expiryx Landing - Server Setup Script
# Run this on your server (65.109.86.205) to prepare it for deployments

set -e

echo "🚀 Setting up server for Expiryx Landing..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Docker if not installed
if ! command -v docker &> /dev/null; then
    echo "🐳 Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
    echo "Docker installed successfully!"
else
    echo "✅ Docker is already installed"
fi

# Install Docker Compose if not installed
if ! command -v docker-compose &> /dev/null; then
    echo "🐳 Installing Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo "Docker Compose installed successfully!"
else
    echo "✅ Docker Compose is already installed"
fi

# Create app directory
echo "📁 Creating application directory..."
sudo mkdir -p /opt/expiryx-landing
sudo chown $USER:$USER /opt/expiryx-landing

# Start Docker service
echo "🔧 Starting Docker service..."
sudo systemctl enable docker
sudo systemctl start docker

echo ""
echo "✅ Server setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Add the following secrets to your GitHub repository:"
echo "   - SERVER_HOST: 65.109.86.205"
echo "   - SERVER_USER: your_ssh_username"
echo "   - SERVER_SSH_KEY: your_private_ssh_key"
echo ""
echo "2. Make sure SSH key authentication is set up"
echo "3. Push to main branch to trigger deployment"
echo ""
