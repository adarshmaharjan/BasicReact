import React from 'react';

const Menu = (props) => {
	const { items } = props;
	// console.log(items);
	return (
		<div>
			<div className='section-center'>
				{items.map((menuItem) => {
					const { id, title, category, price, img, desc } = menuItem;
					return (
						<article key={id} className='menu-item'>
							<img src={img} alt='food' className='photo' />
							<div className='item-info'>
								<header>
									<h4>{title}</h4>
									<h4 className='price'>{price}</h4>
								</header>
								<p className='item-text'>{desc}</p>
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
