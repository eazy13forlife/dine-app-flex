const About = () => {
  return (
    <div className="About">
      <div className="About__rectangle About__rectangle--right-curved"></div>
      <div className="About__content">
        <img
          src={enjoyableDesktop}
          alt="Hilly farm with grazing animals"
          className="About__image About__image--farm"
        />
        <DescriptionCard
          heading="Enjoyable place for all the family"
          bodyText="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
          className="About__description-card-enjoyable"
        />
        <DescriptionCard
          heading="The most locally sourced food"
          bodyText="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest,most sustainable food."
          className="About__description-card-local"
        />
        <img
          src={locallySourced}
          alt="A chef adding the finishing touches to a dish"
          className="About__image About__image--chef"
        />
        <Hamburger
          number={6}
          width="16rem"
          height="6px"
          className="About__hamburger"
        />
      </div>
      <div className="About__rectangle About__rectangle--left-curved"></div>
    </div>
  );
};

//my computer size
.About {
  height: 120rem;
  display: grid;
  grid-template-columns:
    [full-start] 15rem [center-start] repeat(
      12,
      [col-start] minmax(min-content, 6.5rem) [col-end]
    )
    [center-end]
    15rem [full-end];
  grid-column-gap: 3rem;
  grid-template-rows: repeat(2, 1fr);

  &__rectangle {
    width: 89.5rem;
    height: 32rem;
    background-color: #ebecf0;
    z-index: -1;
    &--right-curved {
      border-top-right-radius: 10rem;
      grid-column: full-start/col-end 8;
      grid-row: 1/2;
    }
    &--left-curved {
      border-top-left-radius: 10rem;
      grid-column: col-start 5 / full-end;
      grid-row: 2/3;
      align-self: end;
    }
  }
  &__image {
    box-shadow: 0rem 5rem 10rem -3rem grey;
    &--farm {
      width: 100%;
      grid-column: center-start/ col-end 5;
      grid-row: 1 / 2;
      transform: translateY(-4rem);
      object-fit: cover;
    }
    &--chef {
      width: 100%;
      grid-column: col-start 6 / col-end 10;
      grid-row: 2/3;
      object-fit: cover;
      align-self: end;
    }
  }
  &__description-card-enjoyable {
    grid-column: col-start 7 / col-end 11;
    grid-row: 1/2;
    align-self: center;
  }
  &__description-card-local {
    grid-column: center-start / col-end 4;
    grid-row: 2/3;
    align-self: center;
  }
  &__hamburger {
    grid-column: center-end / full-end;
    align-self: center;
    grid-row: 2/3;
    transform: translateX(-25rem) translateY(3rem);
  }
}


//1440 size
.About {
  height: 120rem;
  display: grid;
  grid-template-columns:
    [full-start] 15rem [center-start] repeat(
      12,
      [col-start] minmax(min-content, 6.5rem) [col-end]
    )
    [center-end]
    15rem [full-end];
  grid-column-gap: 3rem;
  grid-template-rows: repeat(2, 1fr);

  &__rectangle {
    width: 89.5rem;
    height: 32rem;
    background-color: #ebecf0;
    z-index: -1;
    &--right-curved {
      border-top-right-radius: 10rem;
      grid-column: full-start/col-end 8;
      grid-row: 1/2;
    }
    &--left-curved {
      border-top-left-radius: 10rem;
      grid-column: col-start 5 / full-end;
      grid-row: 2/3;
      align-self: end;
    }
  }
  &__image {
    box-shadow: 0rem 5rem 10rem -3rem grey;
    &--farm {
      width: 100%;
      grid-column: center-start/ col-end 5;
      grid-row: 1 / 2;
      transform: translateY(-4rem);
      object-fit: cover;
    }
    &--chef {
      width: 100%;
      grid-column: col-start 7 / col-end 12;
      grid-row: 2/3;
      object-fit: cover;
      align-self: end;
    }
  }
  &__description-card-enjoyable {
    grid-column: col-start 7 / col-end 12;
    grid-row: 1/2;
    align-self: center;
  }
  &__description-card-local {
    grid-column: center-start / col-end 5;
    grid-row: 2/3;
    align-self: center;
  }
  &__hamburger {
    grid-column: center-end / full-end;
    align-self: center;
    grid-row: 2/3;
    transform: translateX(-5rem) translateY(3rem);
  }
}