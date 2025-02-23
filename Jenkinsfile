pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                print "Docker Build Image"
            script {
                bat "docker build -t csi403-frontend ."
                print "Docker Build Image Success"
            }

            print "Docker Image to Running Container"
            script {
                bat "docker rm -f csi402-frontend-run || true"
                bat "docker run -d --name csi403-frontend-run -p 54100:3000 csi403-frontend:latest"
                print "Docker Image to running Container Success"
            }
            }
        }
    }
}
