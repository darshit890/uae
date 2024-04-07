import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { toast } from "react-hot-toast";

interface Product {
	_id: number;
	name: string;
	price: number;
	quantity: number;
	// Add any other properties of Product here
}

interface State {
	showCart: boolean;
	cartItems: Product[];
	totalPrice: number;
	totalQuantities: number;
	qty: number;
	inCheckoutProcess: boolean;
	lightTheme: boolean;
}

interface ContextValue extends State {
	incQty: () => void;
	decQty: () => void;
	onAdd: (product: Product, quantity: number) => void;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
	toggleCartItemQuantity: (id: number, value: string) => void;
	onRemove: (product: Product) => void;
	setQty: React.Dispatch<React.SetStateAction<number>>;
	setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
	setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
	setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
	setInCheckoutProcess: React.Dispatch<React.SetStateAction<boolean>>;
	setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextValue | undefined>(undefined);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState<Product[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(1);
	const [inCheckoutProcess, setInCheckoutProcess] = useState(false);
	const [lightTheme, setLightTheme] = useState(false);

	let foundProduct: Product;
	let index: number;

	const round = (number: number): number => {
		return Math.round((number + Number.EPSILON) * 100) / 100;
	};

	const onAdd = (product: Product, quantity: number): void => {
		const checkProductInCart = cartItems.find((item) => item._id === product._id);

		setTotalPrice((prevTotalPrice) => round(prevTotalPrice + product.price * quantity));
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
		if (checkProductInCart) {
			const updatedCardItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
				return cartProduct;
			});
			setCartItems(updatedCardItems);
		} else {
			product.quantity = quantity;

			setCartItems([...cartItems, { ...product }]);
		}
		toast.success(`${qty} ${product.name} added to the cart.`);
	};

	const onRemove = (product: Product): void => {
		foundProduct = cartItems.find((item) => item._id === product._id)!;
		const newCartItems = cartItems.filter((item) => item._id !== product._id);
		setCartItems(newCartItems);
		setTotalPrice((prev) => round(prev - foundProduct!.price * foundProduct!.quantity));
		setTotalQuantities((prev) => prev - foundProduct!.quantity);
	};

	const toggleCartItemQuantity = (id: number, value: string): void => {
		foundProduct = cartItems.find((item) => item._id === id)!;
		index = cartItems.findIndex((product) => product._id === id);
		let newCartItems = cartItems.filter((item) => item._id !== id);

		if (value === "inc") {
			newCartItems.splice(index, 0, {
				...foundProduct,
				quantity: foundProduct.quantity + 1,
			});

			setCartItems(newCartItems);
			setTotalPrice((prev) => round(prev + foundProduct.price));
			setTotalQuantities((prev) => prev + 1);
		} else if (value === "dec") {
			if (foundProduct.quantity > 1) {
				newCartItems.splice(index, 0, {
					...foundProduct,
					quantity: foundProduct.quantity - 1,
				});

				setCartItems(newCartItems);
				setTotalPrice((prev) => round(prev - foundProduct.price));
				setTotalQuantities((prev) => prev - 1);
			}
		}
	};

	const incQty = (): void => {
		setQty((prev) => prev + 1);
	};
	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty > 1) return prevQty - 1;
			else return 1;
		});
	};

	useEffect(() => {
		setTotalPrice(prev => (Math.round((prev + Number.EPSILON) * 100) / 100))
	}, [totalPrice])
};

export const useStateContext = () => useContext(Context);