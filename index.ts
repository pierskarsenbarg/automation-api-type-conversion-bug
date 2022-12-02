import { LocalWorkspace } from '@pulumi/pulumi/automation';

LocalWorkspace.createOrSelectStack({
    stackName: 'debug-stack',
    workDir: 'debug'
}, {
    stackSettings: {
        ['debug-stack']: {
            config: {
                'debug-stack:accountId': '012345678912',
                'aws:allowedAccountIds': ['012345678912'],
                'aws:region': 'eu-west-1'
            }
        }
    },
    envVars: { AWS_PROFILE: 'REDACTED', PULUMI_ACCESS_TOKEN: 'REDACTED' }
}).then(stack => {
    stack.up({ onEvent: console.log }).then(result => console.log(result.summary));
});