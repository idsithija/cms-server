import { authSelector, authSlice, useDispatch, useSelector } from "@/lib/redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(authSelector);

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(authSlice.actions.decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(authSlice.actions.increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};
