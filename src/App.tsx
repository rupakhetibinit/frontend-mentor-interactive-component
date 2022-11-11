import { useState } from 'react';
import Illustration from '../images/illustration-thank-you.svg';
import IconStar from '../images/icon-star.svg';
import './App.css';

function App() {
	const ratings = [...Array(6).keys()];
	ratings.shift();

	const [rating, setRating] = useState<number>();
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	return (
		<div className='min-w-screen min-h-screen bg-black text-white flex justify-center items-center'>
			<div className='flex flex-col h-96 w-96 bg-gray-700 p-8 rounded-3xl'>
				{!isSubmitted && (
					<>
						<div className='w-10 h-10 relative rounded-full bg-gray-600'>
							<div className='absolute top-3 left-3 w-full h-full'>
								<img src={IconStar} />
							</div>
						</div>
						<div className='mb-4 mt-4'>
							<h3 className='text-2xl font-medium mb-4'>How did we do?</h3>
							<p className='text-md text-slate-200'>
								Please let us know how we did with your support request. All
								feedback is appreciated to help us improve our offering!
							</p>
						</div>
						<div className='flex flex-row items-center justify-between mb-6'>
							{ratings.map((r) => (
								<div
									key={r}
									onClick={() => setRating(r)}
									className={`cursor-pointer flex justify-center items-center w-12 h-12 rounded-full bg-gray-600 hover:bg-orange-500 ${
										r === rating ? 'bg-orange-500' : ''
									}`}>
									{r}
								</div>
							))}
						</div>
						<button
							onClick={() => setIsSubmitted(true)}
							className='w-11/12 h-8 mx-auto rounded-2xl bg-orange-500 hover:bg-gray-100 hover:text-orange-500'>
							SUBMIT
						</button>
					</>
				)}
				{isSubmitted && (
					<div className='flex flex-col items-center'>
						<img src={Illustration} />
						<div className='flex justify-center items-center bg-gray-600 h-8 w-48 rounded-2xl mt-6 mb-4'>
							<p className='text-orange-500'>You selected {rating} out of 5</p>
						</div>
						<h3 className='text-2xl'>Thank you!</h3>
						<p className='text-sm text-center text-gray-300'>
							We appreciate you taking the time to give a rating. If you ever
							need more support, don't hesitate to get in touch!
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
