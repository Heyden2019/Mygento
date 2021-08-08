import fs from 'fs';
import path from 'path';

export type PrivacyPolicyType = {
  title: string;
  body: string[];
}[];

export const readPrivacyPolicy = (): PrivacyPolicyType => {
  const privacyPolicyPath = path.join(
    process.cwd(),
    'public/data/privacyPolicy.json',
  );

  const privacyPolicy = JSON.parse(fs.readFileSync(privacyPolicyPath, 'utf8'));

  return privacyPolicy;
};
