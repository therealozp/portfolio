import React from 'react';
import { Box } from '@mui/system';
import { Typography, Divider } from '@mui/material';

const SchoolBlock = () => {
	return (
		<Box>
			<Box sx={{ position: 'relative' }}>
				<Box
					style={{
						background: 'url("/TDN2.jpg") no-repeat center',
						backgroundSize: 'cover',
						backgroundAttachment: 'fixed',
						height: '80vh',
						// position: 'absolute',
						// backgroundPosition:
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							right: 64,
							top: 170,
							display: 'block',
							width: 'max-content',
						}}
					>
						<Box>
							<Typography
								sx={{
									fontFamily: 'DM Sans',
									color: '#000000',
									fontWeight: 'bold',
								}}
								variant="h1"
							>
								Education
							</Typography>
							<Divider variant="middle" />
							<Box>
								<Typography
									variant="h4"
									sx={{
										color: '#000000',
										fontWeight: 'bold',
										width: '100%',
										textAlign: 'left',
									}}
								>
									where it all began
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					padding: '0 64px',
					display: 'grid',
					gridTemplateColumns: '60% 40%',
					height: '100vh',
					alignContent: 'center',
				}}
			>
				<Box>
					<Typography
						sx={{
							fontFamily: 'DM Sans',
							fontWeight: 'bold',
							color: '#4264d4',
						}}
						variant="h1"
					>
						Tran Dai Nghia High School
					</Typography>
					<Typography
						sx={{
							fontFamily: 'DM Sans',
							fontWeight: 'bold',
						}}
						variant="h3"
					>
						for the Gifted{' '}
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Box sx={{ padding: '0', width: '75%' }}>
						<Typography sx={{ fontSize: '1.1em' }}>
							Tran Dai Nghia (TDN) is one of the 3 gifted schools in Ho Chi Minh
							City, and it is also:
							<br />
							- a gifted secondary school
							<br />- both a secondary and a high school, but students must take
							a leaving exam like any other student in order to re-enter.
							<br /> <br />
							As a long-time follower of TDN (now at 7 years!), the memories -
							as well as painful attempts of being <strong>
								0.1 points
							</strong>{' '}
							shy of getting into the 2020&apos;s English National Team - has
							shaped me into the person I am today. In more ways than one, TDN
							has molded me into the active, positive, and caring person that I
							now am, and in its honor, I will carry that spirit forever more.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SchoolBlock;
