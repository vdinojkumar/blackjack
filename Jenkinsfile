pipeline {
  agent any
  stages {
    stage('checkoutcode') {
      steps {
        git(url: 'https://github.com/vdinojkumar/blackjack', branch: 'main')
      }
    }

    stage('') {
      steps {
        sh 'ls -la'
      }
    }

  }
}