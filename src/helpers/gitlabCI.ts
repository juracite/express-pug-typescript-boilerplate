export function isGitLabCI(): boolean {
    return process.env.GITLAB_CI === 'true' && process.env.CI_SERVER === 'yes';
}
