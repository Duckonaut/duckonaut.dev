{
  description = "All the components of duckonaut.dev";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-23.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      rec {
        packages."duckonaut.dev-front" = import ./front.nix { pkgs = pkgs; };
        packages.default = packages."duckonaut.dev-front";
      }
    );
}
