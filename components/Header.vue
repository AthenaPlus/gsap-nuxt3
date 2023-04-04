<template>
    <header className="header">
      <a
        className="brand"
        href="https://athenaplus.kz/#top"
        target="_blank"
        rel="noreferrer"
      >
      <img id="imgLogo" src="/img/Logo_AthenaPlus.png"  class="mb-2"
          width="200"
          height="28"
          alt="ScrollTrigger"
        />
      </a>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/photo">Photo</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/boxes">Boxes</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/scroll">ScrollTrigger</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/layers">Layers Section</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  