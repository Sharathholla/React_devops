const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://13.42.5.43:9000',
        token: "sqp_ae4ac188e46dfced3837b7c7ad1d82eb652d948f",
        options: {
            'sonar.projectName': 'sonarqube-react-project',
            'sonar.projectDescription': 'Checking (Description of my project)',
            'sonar.projectKey': 'sonarqube-react-project',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)