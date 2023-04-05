export interface CrGPTCLIOptions {
    source?: string;
    target?: string;
    diffArgs?: string;
    prId?: string;
    init?: boolean;
    aiToken?: string;
    githubToken?: string;
    bitbucketToken?: string;
    projectSlug?: string;
    repoSlug?: string;
    config: string;
    model?: string;
    output?: 'console' | 'bitbucket' | 'github' | 'file';
  }
  