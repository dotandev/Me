import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

const repos = [
  "me", "portfolio",
]; 

async function seedRepos(repo: string) {
  
}

(async () => {
  for (const repo of repos) {
    try {
      await seedRepos(repo);
    } catch (error) {
      console.error(`Error seeding locale "${repo}":`, error);
    }
  }

  await prisma.$disconnect();
})();

