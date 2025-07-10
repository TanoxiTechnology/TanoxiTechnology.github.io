'use client';

import { useTranslations } from '@/context/useTranslations';

export default function About() {
  const { t } = useTranslations();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Company Introduction */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-8">{t('about.title')}</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6">
            {t('about.introduction')}
          </p>
          <p className="text-lg text-gray-600">
            {t('about.commitment')}
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-600">
              {t('about.mission.description')}
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h2>
            <p className="text-gray-600">
              {t('about.vision.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.values.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.values.quality.title')}</h3>
            <p className="text-gray-600">
              {t('about.values.quality.description')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.values.integrity.title')}</h3>
            <p className="text-gray-600">
              {t('about.values.integrity.description')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.values.customerFirst.title')}</h3>
            <p className="text-gray-600">
              {t('about.values.customerFirst.description')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.values.innovation.title')}</h3>
            <p className="text-gray-600">
              {t('about.values.innovation.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.team.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('about.team.members.member1.name')}</h3>
            <p className="text-gray-600 mb-2">{t('about.team.members.member1.role')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('about.team.members.member2.name')}</h3>
            <p className="text-gray-600 mb-2">{t('about.team.members.member2.role')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('about.team.members.member3.name')}</h3>
            <p className="text-gray-600 mb-2">{t('about.team.members.member3.role')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-2">{t('about.team.roles.operations')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600 mb-2">{t('about.team.roles.customerRelations')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
