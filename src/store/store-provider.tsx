"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

import { loadPersistedTrackerState, persistTrackerState, pickPersistedState } from "@/lib/persistence";
import { makeStore, type AppStore } from "@/store";
import { hydrateFromStorage } from "@/store/tracker-slice";

type Props = {
  children: React.ReactNode;
};

export function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const store = storeRef.current!;
    const persisted = loadPersistedTrackerState();
    if (persisted) {
      store.dispatch(hydrateFromStorage(persisted));
    }

    const unsubscribe = store.subscribe(() => {
      persistTrackerState(pickPersistedState(store.getState().tracker));
    });

    return unsubscribe;
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
