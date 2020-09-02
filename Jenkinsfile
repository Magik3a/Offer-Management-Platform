pipeline {
 agent any
   libraries {
      lib('github.com/Magik3a/Jenkinsfile_Gitflow_Versioning')
    }
    environment {
        PROJECT_VERSION = get_version(GIT_BRANCH, '1.1.000')
        PROJECT_PATH = "OMP.Web\\OMP.Web.csproj"
        PROJECT_NAME = "OMP"  
		 }
    stages {
            
        stage('Publish Project') {
            steps {
                publishProject()
            }
        }

        stage('Get Artifacts') {
            steps {
                zipArtifacts()
                getArtifacts()
            }        
        }
    }

	options {
		// make sure we only keep 50 builds at a time, so we don't fill up our storage!
			buildDiscarder(logRotator(numToKeepStr:'50'))
	}
}

def publishProject(){
    bat 'dotnet publish '+ PROJECT_PATH +' -c Debug -o Publish/Debug /P:AllowUntrustedCertificate=True /P:AssemblyVersion='+ PROJECT_VERSION +' /P:Version='+ PROJECT_VERSION 
    bat 'dotnet publish '+ PROJECT_PATH +' -c Release -o Publish/Release /P:AllowUntrustedCertificate=True /P:AssemblyVersion='+ PROJECT_VERSION +' /P:Version='+ PROJECT_VERSION      
}
def zipArtifacts(){
    zip zipFile: PROJECT_NAME +'Debug.zip', archive: false, dir: 'Publish/Debug'
    zip zipFile: PROJECT_NAME +'Release.zip', archive: false, dir: 'Publish/Release'
}
def getArtifacts(){    
    archiveArtifacts artifacts: PROJECT_NAME +'Debug.zip', fingerprint: true
    archiveArtifacts artifacts: PROJECT_NAME +'Release.zip', fingerprint: true
}