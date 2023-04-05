export type Config = {
    output: 'console' | 'bitbucket' | 'github' | 'file';
    bitbucket?: {
      endpoint?: string;
      repoSlug?: string;
      accessToken?: string;
      owner?: string;
    };
    github?: {
      endpoint?: string;
      commitId?: string;
      repoSlug?: string;
      accessToken?: string;
      owner?: string;
    },
    file?: {
      path: string;
      name: string;
    },
    openai: {
      endpoint: string;
      model: string;
      apiKey: string;
    };
    code: {
      gitDiffOArgs: string;
    }
    review: {
      prompt: string;
      checklist: string;
      summary: string;
      ignoreFiles: string[];
    };
  };

  export type ReviewSumary = {
    title: string;
    content: string;
    summary: string;
    reviews: FileReviewResult[];
  }
  
  export type Diff = {
    file: string;
    diff: string;
  };

  export type FileReviewResult = {
    file: string;
    review: string;
  }

  export type runCRGPTOptions = {
    sourceBranch: string;
    targetBranch: string;
    prId?: string;
  }