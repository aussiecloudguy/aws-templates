import * as cdk from 'aws-cdk-lib';
import * as AwsTemplates from '../lib/aws-templates-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AwsTemplates.AwsTemplatesStack(app, 'MyTestStack');
    // THEN
    const actual = app.synth().getStackArtifact(stack.artifactId).template;
    expect(actual.Resources ?? {}).toEqual({});
});
