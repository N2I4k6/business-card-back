import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PROFILE_ID = 'main-profile';

async function main() {
  console.log('Начинаем seed...');

  const profile = await prisma.profile.upsert({
    where: { id: PROFILE_ID },
    update: {
      name: 'Николай',
      description: 'Frontend-разработчик',
      github: 'https://github.com/N2I4k6',
      linkedin: null,
      website: null,
    },
    create: {
      id: PROFILE_ID,
      name: 'Николай',
      description: 'Frontend-разработчик',
      github: 'https://github.com/N2I4k6',
      linkedin: null,
      website: null,
    },
  });

  console.log(`Профиль: ${profile.name}`);

  await prisma.skill.deleteMany({ where: { profileId: profile.id } });
  await prisma.experience.deleteMany({ where: { profileId: profile.id } });
  await prisma.project.deleteMany({ where: { profileId: profile.id } });

  await prisma.skill.createMany({
    data: [
      { name: 'HTML', level: 5, profileId: profile.id },
      { name: 'CSS', level: 5, profileId: profile.id },
      { name: 'React', level: 5, profileId: profile.id },
      { name: 'Next.js', level: 3, profileId: profile.id },
      { name: 'JavaScript', level: 5, profileId: profile.id },
      { name: 'TypeScript', level: 5, profileId: profile.id },
      { name: 'Axios', level: 5, profileId: profile.id },
      { name: 'Ky', level: 2, profileId: profile.id },
      { name: 'Ramda', level: 2, profileId: profile.id },
      { name: 'SCSS Modules', level: 5, profileId: profile.id },
      { name: 'Redux', level: 5, profileId: profile.id },
      { name: 'Effector', level: 2, profileId: profile.id },
      { name: 'Ant Design', level: 5, profileId: profile.id },
      { name: 'Mantine', level: 2, profileId: profile.id },
      { name: 'Node.js', level: 2, profileId: profile.id },
      { name: 'Nest.js', level: 2, profileId: profile.id },
      { name: 'Prisma', level: 1, profileId: profile.id },
      { name: 'GraphQL', level: 2, profileId: profile.id },
      { name: 'Docker', level: 3, profileId: profile.id },
      { name: 'MongoDB', level: 3, profileId: profile.id },
      { name: 'Express', level: 2, profileId: profile.id },
    ],
  });

  await prisma.experience.createMany({
    data: [
      {
        company: 'amoCRM',
        position: 'Frontend-разработчик',
        startDate: new Date('2025-05-01'),
        endDate: new Date('2026-07-01'),
        achievements: [
          'Поддерживал и оптимизировал CRM-систему',
          'Участвовал во внедрении AI-ассистента',
          'Работал с чатами и переводами',
          'Перевёл ряд модулей с legacy-стека (JavaScript + Backbone + Twig) на React-компоненты',
          'Участвовал в масштабной миграции кодовой базы с JavaScript на TypeScript'
        ],
        profileId: profile.id,
      },
      {
        company: 'Salebot.pro',
        position: 'Технический лидер (Frontend)',
        startDate: new Date('2023-09-01'),
        endDate: new Date('2025-05-01'),
        achievements: [
          'Руководил командой фронтенд-разработчиков',
          'Проводил code-review и выстраивал процессы',
          'Разработал с нуля приложение для автоматизации документооборота',
          'Участвовал в создании и поддержке банковского приложения',
          'Настроил CI/CD-процессы',
          'Работал с Docker и деплоем на сервер'
        ],
        profileId: profile.id,
      },
      {
        company: 'Aifory.pro',
        position: 'Frontend-разработчик',
        startDate: new Date('2022-06-01'),
        endDate: new Date('2023-08-01'),
        achievements: [
          'Разработал и обеспечивал поддержку двух криптокошельков: Aifory и X-Node',
          'Создал два лендинга для компании Aifory',
          'Разработал и поддерживал личный кабинет администратора для компании Terra',
        ],
        profileId: profile.id,
      },
      {
        company: 'DealTech',
        position: 'Frontend-разработчик',
        startDate: new Date('2018-06-01'),
        endDate: new Date('2021-05-01'),
        achievements: [
          'Разработал интернет-магазин на Next.js',
          'Переработал проект на Rust с использованием фреймворка Yew',
        ],
        profileId: profile.id,
      },
    ],
  });

  await prisma.project.createMany({
    data: [
      {
        name: 'Business Card Backend',
        description: 'GraphQL API для цифровой визитки',
        url: null,
        repoUrl: 'https://github.com/N2I4k6/business-card-back',
        profileId: profile.id,
      },
    ],
  });

  console.log('Seed завершён успешно');
}

main()
  .catch((e) => {
    console.error('Ошибка seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
