{pkgs ? import <nixpkgs> {} }:
pkgs.mkShellNoCC {
    packages = [
        pkgs.nodejs
    ];
}