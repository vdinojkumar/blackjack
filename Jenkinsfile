pipeline {
  agent any
  stages {
    stage('checkoutcode') {
      steps {
        git(url: 'https://github.com/vdinojkumar/blackjack', branch: 'main')
      }
    }

    stage('log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('build') {
      steps {
        sh 'docker build -f blackjack/Dockerfile .'
      }
    }

  }
}