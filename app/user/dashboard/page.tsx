// import { useSession } from 'next-auth/react';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';
import TechForm from '@/components/TechForm';
import { options } from '@/app/api/auth/[...nextauth]/route';

const Dashboard = async () => {
    const session = await getServerSession(options);
    const currentUserName = session?.user?.name;

    if (!session) {
        redirect('/');
    }
    const currentUser = await prisma.user.findFirst({
        where: {
            name: currentUserName,
        },
    });

    let techLength = currentUser?.tech?.length ?? 0;
    return (
        <main className="container" style={{ textAlign: 'center' }}>
            <h2>Welcome, {currentUser?.name}.</h2>
            {/* <code>{`[${hintData.toString()}]`}</code> */}
            <TechForm />
            {techLength > 0 ? (
                <>
                    <h3>Your Tech</h3>
                    <div className="container grid">
                        {currentUser?.tech?.map((tech: any) => (
                            <div
                                key={tech.id}
                                className="card"
                                style={{
                                    background: '#1095c1',
                                    color: 'white',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    height: '70px',
                                }}
                            >
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h3>You have no techs yet.</h3>
            )}
        </main>
    );
};
export default Dashboard;
