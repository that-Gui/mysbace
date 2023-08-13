import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

export const metadata: Metadata = {
	title: 'mySbace users page',
	description: 'mySbace users directory.',
};

export default async function Users() {
	const session = await getServerSession();

	if (!session) {
		return <p>You must be signed in...</p>;
	}
	return (
		<div>
			<h1>Users page</h1>
		</div>
	);
}