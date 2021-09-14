pipeline {
   agent { label '' }
   stages {
       stage('Source') {
           steps {
               git credentialsId: '43244b93-c572-4374-a3d6-8df255fd6e28', url: 'https://github.com/Zelacine/studentsdb/'
           }
       }
       stage('Read') {
        steps {
           script {
           sh "ls -l"
           sh "cat demoSdata.json "
           }
       }

   }
   stage('Copy'){
       steps{
           script{
               sh "cp demoSdata.json DEMONSdata.txt"
               sh "sleep 5"
           }
       }   
    }           
    stage('Write'){
            steps{
                script {
                   sh "echo MY LINE SUPER PUPER -@@@TESTAROSSA@@@ >> DEMONSdata.txt"
                   sh "ls -l"   
                   sh "cat DEMONSdata.txt"
               }
           }
       }
   }      
}

